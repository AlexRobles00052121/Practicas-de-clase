const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@test.com",
      age: 60,
      salary: 1099,
    },
    {
      id: 2,
      name: "Robert Singer",
      email: "bobby@test.com",
      age: 62,
      salary: 999,
    },
    {
      id: 3,
      name: "Misha Collins",
      email: "castiel@test.com",
      age: 35,
      salary: 899,
    },
    {
      id: 4,
      name: "Dean Winchester",
      email: "dean@test.com",
      age: 41,
      salary: 799,
    },
    {
      id: 5,
      name: "Sam Winchester",
      email: "sam@test.com",
      age: 36,
      salary: 699,
    },
  ];

console.log(users);

const updateUser = (idUser, newName, newSalary) => {
    const index = users.findIndex((user)=>user.id == idUser)

    const usuarios = users[index]

    const {name, salary, ...rest} = usuarios;

    const UptadedUser = {
        name: newName,
        salary: newSalary,
        ...rest
    }

    users.splice(index, 1)

    users.splice(index, 0, UptadedUser)

    //users.splice(1, 1) 
};

updateUser(1, "John Winchester", 1500);

console.log(users)

const UserWithOutId = users.map((item)=> {
    const {id, ...datos} = item;
    return datos;
}) 

console.log(UserWithOutId);


