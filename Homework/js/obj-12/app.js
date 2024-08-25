const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };

Name = prompt('Enter employee name:').toLowerCase()
if (Name in employees) {
    const employee = employees[Name];
    alert(`Name: ${Name}, Salary: ${employee.salary}, Address: ${employee.address.district}, ${employee.address.province}`);
  } else {
    alert('Employee not found');
}