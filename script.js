const nameEmployee = 'Ridwan';
const position = 'Manager';
const status = 'Menikah';

function salary(position, status) {
    let basicSalary = 0;
    switch (position) {
        case 'Manager':
            basicSalary = 15000000;
            break;
        case 'Asisten Manager':
            basicSalary = 10000000;
            break;
        case 'Staff':
            basicSalary = 5000000;
            break;
    }

    const positionalAllowance = 0.15 * basicSalary;
    const bpjs = 0.10 * basicSalary;
    const familyAllowance = status === 'Menikah' ? 0.20 * basicSalary : 0;
    const totalSalary = basicSalary + bpjs + familyAllowance + positionalAllowance;

    return [basicSalary, positionalAllowance, bpjs, familyAllowance, totalSalary];
}

const [basicSalary, positionalAllowance, bpjs, familyAllowance, totalSalary] = salary(position, status);

const tbody = document.getElementById('employeeData');
const row = `<tr> 
                 <td>${nameEmployee}</td>
                 <td>${position}</td>
                 <td>${status}</td>
                 <td>Rp.${basicSalary.toLocaleString()}</td>
                 <td>Rp.${positionalAllowance.toLocaleString()}</td>
                 <td>Rp.${bpjs.toLocaleString()}</td>
                 <td>Rp.${familyAllowance.toLocaleString()}</td>
               </tr>`;

tbody.innerHTML = row;

const tfoot = document.getElementById('totalSalary');
const total = `<tr>
               <th colspan="6">Total Gaji</td>
               <th>Rp.${totalSalary.toLocaleString()}</td>
             </tr>`;
    tfoot.innerHTML = total;