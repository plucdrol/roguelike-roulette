It's just a function, you pass it a list of games (strings) and it returns one of them at random.

Example:

```javascript
>> console.log(roulette('20XX','ISAAC','NECRODANCER','DEAD CELLS','DOWNWELL','GUNGEON','FLINTHOOK','NUCLEAR THRONE'))
DOWNWELL
>> console.log(roulette('20XX','ISAAC','NECRODANCER','DEAD CELLS','DOWNWELL','GUNGEON','FLINTHOOK','NUCLEAR THRONE'))
DOWNWELL
>> console.log(roulette('20XX','ISAAC','NECRODANCER','DEAD CELLS','DOWNWELL','GUNGEON','FLINTHOOK','NUCLEAR THRONE'))
NECRODANCER
>> console.log(roulette('20XX','ISAAC','NECRODANCER','DEAD CELLS','DOWNWELL','GUNGEON','FLINTHOOK','NUCLEAR THRONE'))
FLINTHOOK
>> console.log(roulette('20XX','ISAAC','NECRODANCER','DEAD CELLS','DOWNWELL','GUNGEON','FLINTHOOK','NUCLEAR THRONE'))
20XX
```