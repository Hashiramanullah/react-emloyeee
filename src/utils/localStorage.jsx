const employees = [
  {
    "id": 1,
    "firstName": "Ali",
    "email": "employee1@gmail.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 12,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update report",
        "description": "Update the weekly sales report.",
        "date": "2024-10-20",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team meeting",
        "description": "Attend team meeting to discuss project status.",
        "date": "2024-10-18",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Client follow-up",
        "description": "Follow up with client on project requirements.",
        "date": "2024-10-17",
        "category": "Client Relations"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ahmed",
    "email": "employee2@gmail.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare presentation",
        "description": "Prepare Q4 presentation for stakeholders.",
        "date": "2024-10-21",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "System audit",
        "description": "Conduct an audit of all system logs.",
        "date": "2024-10-19",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Draft proposal",
        "description": "Draft proposal for the upcoming project.",
        "date": "2024-10-18",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Fatima",
    "email": "employee3@gmail.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Research competitors",
        "description": "Analyze competitor strategies for Q4.",
        "date": "2024-10-22",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Budget planning",
        "description": "Prepare budget planning for next quarter.",
        "date": "2024-10-15",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Client survey",
        "description": "Conduct survey to gather client feedback.",
        "date": "2024-10-14",
        "category": "Survey"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sara",
    "email": "employee4@gmail.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Code review",
        "description": "Review code for the new feature implementation.",
        "date": "2024-10-23",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Server maintenance",
        "description": "Perform routine server maintenance.",
        "date": "2024-10-16",
        "category": "IT"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Zainab",
    "email": "employee5@gmail.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Customer onboarding",
        "description": "Guide new customers through the onboarding process.",
        "date": "2024-10-25",
        "category": "Customer Service"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Inventory check",
        "description": "Check inventory for low-stock items.",
        "date": "2024-10-10",
        "category": "Inventory"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Weekly summary",
        "description": "Summarize weekly achievements and challenges.",
        "date": "2024-10-12",
        "category": "Reports"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Usman",
    "email": "admin@gmail.com",
    "password": "123"
  }
];



export const setLocalStorage = () => {
 localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
 
    const EmployeeData =  JSON.parse(localStorage.getItem('employee'));
    const AdminData =  JSON.parse(localStorage.getItem('admin'));

  return {EmployeeData,AdminData};   
}