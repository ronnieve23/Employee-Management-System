INSERT INTO department (department_name)
VALUES
    ('Executive Leadership'),
    ('Engineering'),
    ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Chief Executive Officer', 200000, 1),
    ('Chief Technology Officer', 150000, 1),
    ('Director, Solutions Development', 100000, 2)
    ('Human Resources Director', 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ron', 'Romero', 1, NULL),
    ('Zachary', 'Millburn', 2, 1),
    ('Jessie', 'Kaminsky', 3, 2),
    ('Mikael', 'Pfishnets', 4, 1);
    