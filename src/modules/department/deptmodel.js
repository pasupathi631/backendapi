import db from "../../config/db.js"

const ensureDepartmentTable = async () => {
    await db.query(`
        CREATE TABLE IF NOT EXISTS departments (
            dept_id INT AUTO_INCREMENT PRIMARY KEY,
            dept_name VARCHAR(250),
            dept_code VARCHAR(20) UNIQUE,
            dept_desc TEXT,
            dept_status TINYINT(1) DEFAULT 1
        )
    `);
};

const normalizeStatus = (status) => {
    if (typeof status === 'number') return status;
    if (status === 'Active' || status === true || status === 1 || status === '1') return 1;
    return 0;
};

const mapDepartmentRow = (row) => ({
    id: row.dept_id,
    dept_id_code: row.dept_code,
    name: row.dept_name,
    branch: 'Corporate Center',
    description: row.dept_desc || '',
    status: row.dept_status === 1 || row.dept_status === '1' ? 'Active' : 'Inactive',
    created_at: null
});

export const getDepartments = async () => {
    await ensureDepartmentTable();

    const [rows] = await db.query(`
        SELECT dept_id, dept_name, dept_code, dept_desc, dept_status
        FROM departments
        ORDER BY dept_id ASC
    `);

    return rows.map(mapDepartmentRow);
};

export const postdept = async (body) => {
    await ensureDepartmentTable();

    const [result] = await db.query(`
        INSERT INTO departments (dept_name, dept_code, dept_desc, dept_status)
        VALUES (?, ?, ?, ?)
    `, [
        body.name,
        body.dept_id_code,
        body.description || '',
        normalizeStatus(body.status)
    ]);

    return result;
};

export const putdept = async (body) => {
    await ensureDepartmentTable();

    const [result] = await db.query(`
        UPDATE departments
        SET dept_name = ?, dept_desc = ?, dept_status = ?
        WHERE dept_code = ?
    `, [
        body.name,
        body.description || '',
        normalizeStatus(body.status),
        body.dept_id_code
    ]);

    return result;
};

export const toggleDeptStatus = async (deptIdCode, status) => {
    await ensureDepartmentTable();

    const [result] = await db.query(`
        UPDATE departments
        SET dept_status = ?
        WHERE dept_code = ?
    `, [normalizeStatus(status), deptIdCode]);

    return result;
};