const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Zack",
        room: "gauntlet"
      },
      {
        id: "2",
        name: "Lucy",
        room: "react"
      },
      {
        id: "3",
        name: "Jutta",
        room: "gauntlet"
      }
    ];
  });

  it("should add new user", () => {
    var users = new Users();
    var user = {
      id: 123,
      name: "Zack",
      room: "BostonJS"
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should return names for gauntlet", () => {
    var userList = users.getUserList("gauntlet");

    expect(userList).toEqual(["Zack", "Jutta"]);
  });

  it("should return names for react", () => {
    var userList = users.getUserList("react");

    expect(userList).toEqual(["Lucy"]);
  });

  it("should remove a user", () => {
    var userId = "1";
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it("should not remove a user", () => {
    var userId = "10";
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it("should find user", () => {
    var userId = "2";
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it("should not find user", () => {
    var userId = "6";
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });
});
