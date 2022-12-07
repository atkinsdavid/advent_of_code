# From https://adventofcode.com/2022

<summary>
    Day 01
</summary>
<details>
    - split input on line breaks
    - inside loop:
        - multiplied value to ensure it was numeric
        - used counters to track current index position in array of totals, and reset if we hit a 0 value
        - add value to running total inside loop
        - add running total to current index position
    - sort the array of totals, get the last one for pt 1
    - add together the values from the last 3 index positions
</details>

<details>
    <summary>
        Day 02
    </summary>
        - split input on line breaks
        - set number values for each possible sting (only 9 combos, seemed quickest)
        - loop through input, add total of each line to total variable
        - added second loop to recalculate string values based on instructions for pt2    
</details>

<details>
    <summary>
        Day 03
    </summary>
        - Added array of alphabet characters (didn't want to figure out how to generate the array)
        - split input on line breaks
        - pt1
            - loop through each pack
                - loop through letters in first half of pack string
                    - loop through letters in second half to compare letter from first half
                    - break after we find the match
                - break after we find the match
            - loop throguh alpha array to find matching character
            - add character's index position + 1 to the sum
        - pt2
            - loop through each pack
                - if it's the last in the group (counter = 2), reset the counter and move on
                - if it's the second in the group, add one to the counter and move on
                - if it's the first in the group
                    - add one to the counter
                    - identify the rest of the packs in the group
                    - loop through each letter in the first pack
                        - break out of the loop if we've already found our letter
                        - loop through the letters in the second pack
                        - if this letter matches the letter from the first pack
                            - loop through letters in the last pack
                            - if this letter matches the letter from the previous 2 packs
                                - save our found letter
                                - break out of this loop
                        - break after we've found our letter    
                    - loop throguh alpha array to find matching character
                    - add character's index position + 1 to the sum
</details>

<details>
    <summary>
        Day 04
    </summary>
        - 
</details>


<!--New Day template

<details>
    <summary>
        Day ##
    </summary>
        - 
</details>

-->