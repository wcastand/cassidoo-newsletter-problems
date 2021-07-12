# Solutions to Cassidoo's problems in the newsletter for fun

## Cassidoo

This is her [website](https://cassidoo.co/), [Twitter](https://twitter.com/cassidoo/), [newsletter](https://cassidoo.co/newsletter/)

It's cool, go subscribe, it's free !

## Install/Run

```bash
yarn
```

```bash
yarn test
```

## Problems

## Lonely number

Given three numbers, return their product. But, if one of the numbers is the same as another, it does not count: If two numbers are similar, return the lonely number. If all numbers are same, return 1.

```
$ lonelyNumber(1,2,3)
$ 6

$ lonelyNumber(6,6,4)
$ 4

$ lonelyNumber(7,7,7)
$ 1
```

## Print Arrow

Given a direction and a number of columns, write a function that outputs an arrow of asterisks (see the pattern in the examples below)!

`arrow('right', 3)`

```
*
 *
  *
 *
*
```

`arrow('left', 5)`

```
    *
   *
  *
 *
*
 *
  *
   *
    *
```

## Cube generator

Write a function that draws an ASCII art cube of given height x.

```
$ drawCube(2)
  +----+
 /    /|
+----+ |
|    | +
|    |/
+----+

$ drawCube(4)

   +--------+
  /        /|
 /        / |
+--------+  |
|        |  |
|        |  +
|        | /
|        |/
+--------+
```

## Pride flag

If you are lucky you get the good colors i guess. [https://www.wcastand.dev/#day2](https://www.wcastand.dev/#day2)

## Translate Shift

Imagine your users are all typing slightly incorrectly, in that they shifted their hands one key to the right. Write a function that translates what they mean to say.

```
$ translateShift(';p; epe')
"lol wow"

$ translateShift('vtsmnrttu')
"cranberry"
```

## In Range

Given an IPv4 address and a netmask in CIDR notation, return a boolean specifying whether the IP address is inside the given range.

```
$ inRange("192.168.4.27", "192.168.0.0/16")
$ true

$ inRange("192.168.4.27", "192.168.1.0/24")
$ false
```
