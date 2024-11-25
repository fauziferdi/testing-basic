import {
  add,
  animal,
  asyncTest,
  asyncTestObject,
  division,
  min,
  multiply,
  promiseTest,
  shoppingList,
  errorTest,
  getUser,
  mockFunction,
  snapshootTest,
  delayFunction,
} from "./main.js";

test("add testing", () => {
  expect(add(1, 2)).toBe(3);
});

test("min testing", () => {
  expect(min(10, 5)).toBe(5);
});

test("multiply testing", () => {
  expect(multiply(5, 2)).toBe(10);
});

test("division testing", () => {
  expect(division(3, 3)).toBe(1);
});

test("shoping testing", () => {
  expect(shoppingList).toContain("melon");
});

//array test
test("shoping testing all data ", () => {
  const datas = ["melon", "watermelon", "water"];
  for (const data of datas) {
    expect(shoppingList).toContain(data);
  }
});

//obeject test
test("testing animal object", () => {
  expect(animal).toMatchObject({
    name: "kucing",
    food: "daging",
    ras: "anggora",
  });
});

//promise test

test("testing promise test", () => {
  expect(promiseTest()).resolves.toBe("promise test");
});

test("testing promise test 2", () => {
  return promiseTest().then((res) => expect(res).toBe("promise test"));
});

//async test

test("testing async test", async () => {
  expect(await asyncTest()).toBe("async test");
});

test("testing async test 2", async () => {
  const res = await asyncTest();
  expect(res).toBe("async test");
});

test("testing async test with object", async () => {
  const res = await asyncTestObject();
  expect(res).toMatchObject({
    name: "kucing",
    food: "daging",
    ras: "anggora",
  });
});

//error test

test("error test", () => {
  expect(() => errorTest()).toThrow("error test");
});

//mocking

jest.mock("axios");
import axios from "axios";

axios.get.mockResolvedValue({
  data: {
    id: 1,
    name: "fauzi",
  },
});

test("testing user mocking", async () => {
  const user = await getUser(1);
  expect(user.name).toBe("fauzi");
});

test("testing user mocking 2 ", async () => {
  const res = await mockFunction();
  expect(res).toBe("mock data");
});

//snapshoot

test("sanapshot testing", () => {
  expect(snapshootTest("fauzi")).toMatchSnapshot();
});

//timeout

jest.useFakeTimers();

test("testing timeout", () => {
  const callback = jest.fn();
  delayFunction(callback);
  jest.advanceTimersByTime(1000);
  expect(callback).toHaveBeenCalled();
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
