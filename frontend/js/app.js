const LOGIN_API =
  'http://localhost:3000/login';

const SIGNUP_API =
  'http://localhost:3000/signup';

const EMPLOYEE_API =
  'http://localhost:3000/employees';
  
const ATTENDANCE_API =
'http://localhost:3000/attendance';

const LEAVES_API =
'http://localhost:3000/leaves';

const PAYROLL_API =
'http://localhost:3000/payroll';

async function login() {

  const username =
    document.getElementById('username').value;

  const password =
    document.getElementById('password').value;

  try {

    const response = await fetch(
      LOGIN_API,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data = await response.json();

    if (data.success) {

      alert("Login Success");

      window.location.href =
        'dashboard.html';

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

    alert("Server Error");

  }

}

async function signup() {

  const username =
    document.getElementById('signupUsername').value;

  const password =
    document.getElementById('signupPassword').value;

  try {

    const response = await fetch(
      SIGNUP_API,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data =
      await response.json();

    if (data.success) {

      alert(data.message);

      window.location.href =
        'index.html';

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

    alert("Signup Error");

  }

}

async function addEmployee() {

  const data = {

    employeeId:
      document.getElementById('employeeId').value,

    firstName:
      document.getElementById('firstName').value,

    lastName:
      document.getElementById('lastName').value,

    department:
      document.getElementById('department').value,

    position:
      document.getElementById('position').value,

    salary:
      document.getElementById('salary').value,

    email:
      document.getElementById('email').value,

    contact:
      document.getElementById('contact').value

  };

  try {

    const response = await fetch(
      EMPLOYEE_API,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    const result =
      await response.json();

    const goAttendance =
      confirm(
        "Employee Saved Successfully!\n\nGo to Attendance Page?"
      );

    if (goAttendance) {

      window.location.href =
        'attendance.html';

    }

  } catch (error) {

    console.log(error);

    alert("Failed to Add Employee");

  }

}

async function saveAttendance() {

  const data = {

    employeeId:
      document.getElementById('employeeId').value,

    date:
      document.getElementById('date').value,

    timeIn:
      document.getElementById('timeIn').value,

    timeOut:
      document.getElementById('timeOut').value,

    status:
      document.getElementById('status').value

  };

  try {

    const response = await fetch(
      ATTENDANCE_API,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    const result =
      await response.json();

    const goDashboard =
      confirm(
        "Attendance Saved Successfully!\n\nReturn to Dashboard?"
      );

    if (goDashboard) {

      window.location.href =
        'dashboard.html';

    }

  } catch (error) {

    console.log(error);

    alert("Failed to Save Attendance");

  }

}

async function submitLeave() {

  const data = {
    employeeId:
      document.getElementById('employeeId').value,

    leaveType:
      document.getElementById('leaveType').value,

    startDate:
      document.getElementById('startDate').value,

    endDate:
      document.getElementById('endDate').value
  };

  await fetch(LEAVES_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  alert('Leave Submitted');
}

async function generatePayroll() {

  const data = {

    employeeId:
      document.getElementById('employeeId').value,

    basicSalary:
      document.getElementById('basicSalary').value,

    overtimeHours:
      document.getElementById('overtimeHours').value

  };

  try {

    const response = await fetch(
      PAYROLL_API,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    const result =
      await response.json();

    alert(
      `Net Salary: ₱${result.payroll.netSalary}`
    );

  } catch (error) {

    console.log(error);

    alert("Payroll Error");

  }

}