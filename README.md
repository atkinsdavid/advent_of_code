# advent_of_code_2022

- Day 01:
    - split text on line breaks
    - inside loop:
        - multiplied value to ensure it was numeric
        - used counters to track current index position in array of totals, and reset if we hit a 0 value
        - add value to running total inside loop
        - add running total to current index position
    - sort the array of totals, then add together the values from the last 3 index positions

- Day 02
    - split input on line breaks
    - set number values for each possible sting (only 9 combos, seemed quickest)
    - loop through input, add total of each line to total variable
    - added second loop to recalculate string values based on instructions for pt2    