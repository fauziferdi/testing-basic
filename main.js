import { rejects } from "assert";

export function add(a, b) {
  return a + b;
}

export function min(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function division(a, b) {
  return a / b;
}

//aray
export const shoppingList = ["melon", "watermelon", "water"];

//object
export const animal = {
  name: "kucing",
  food: "daging",
  ras: "anggora",
};

//promise
export function promiseTest() {
  return new Promise((resolve, rejects) => {
    resolve("promise test");
  });
}

//async
export async function asyncTest() {
  return "async test";
}

export async function asyncTestObject() {
  return {
    name: "kucing",
    food: "daging",
    ras: "anggora",
  };
}

//error test
export function errorTest() {
  throw new Error("error test");
}

//mockiing

import axios from "axios";
export const getUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};

export const mockFunction = jest.fn().mockResolvedValue("mock data");

//snapshoot

export const snapshootTest = (name) => {
  return `hello, my name is ${name}`;
};

//delay

export const delayFunction = (callback) => {
  setTimeout(callback, 1000);
};
