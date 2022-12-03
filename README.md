# advent_of_code_2022

- Day 01:
    - split text on line breaks
    - inside loop:
        - multiplied value to ensure it was numeric
        - used counters to track current index position in array of totals, and reset if we hit a 0 value
        - add value to running total inside loop
        - add running total to current index position
    - sort the array of totals, get the last one for pt 1
    - add together the values from the last 3 index positions

- Day 02
    - split input on line breaks
    - set number values for each possible sting (only 9 combos, seemed quickest)
    - loop through input, add total of each line to total variable
    - added second loop to recalculate string values based on instructions for pt2    

- Day 03
    - pt1
        - Added array of alphabet characters (didn't want to figure out how to generate the array)
        - split input on line breaks
        - loop through each pack
            - loop through letters in first half of pack string
                - loop through letters in second half to compare letter from first half
                - break after we find the match
            - break after we find the match
        - loop throguh alpha array to din matching character
        - add characters index position + 1 to the sum
    - pt2
        