Eight houses, represented as cells, are arranged in straight line. Each day every cell competes with its adjacent cells (neighbors). An integer value of 1 represents an active cell and a value of 0 represents an inactive cell. If the neighbors on both the sides of a cell are either active or inactive, the cell becomes inactive on the next day; otherwise the cell become active. The two cells on each end have a single adjacent cell, so assume that the unoccupied space on the opposite side is an inactive cell. Even after updating the cell state, consider its previous state when updating the state of other cells. The state information of all cells should be updated simultaneously.

Write an algorithm to output the state of the cells after the given number of days.

Input 

The input to the function/method consists of two arguments:

states, a list of integers representing the current state of cells;

days, an integer representing the number of days.

Output 

Return a list of integers representing the state of the cells after the given number of days.

Note 

The elements of the list states contains 0s and 1s only.