var expect = require("expect");

var { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    var from = "Gerald";
    var text = "Some Message";
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({
      from,
      text
    });
  });
});

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    var from = "Jules";
    var latitude = 2;
    var longitude = 22;
    var url = "https://www.google.com/maps?q=2,22";
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({ from, url });
  });
});
