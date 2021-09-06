INSERT INTO department (department_name)
VALUES
    ('Executive Leadership'),
    ('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Chief Executive Officer', 200000, 1),
    ('Chief Technology Officer', 180000, 1),
    ('Director, Solutions Development', 80000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ron', 'Romero', 1, NULL),
    ('Zachary', 'Millburn', 2, 1),
    ('Jessie', 'Kaminsky', 3, 2);
    