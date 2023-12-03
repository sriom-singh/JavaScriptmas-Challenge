function calcTotalCandies(children, candy) {

//    Simply first of all we will calculate extra candy by using modulus operator.

    let totalCandiesEaten, extraCandy;
    extraCandy = candy % children ;
//    Then we will subtract the extra candy by total candies.
    totalCandiesEaten = candy - extraCandy;
     console.log(totalCandiesEaten)
    }
    
    calcTotalCandies(3, 10) // expected output: 9
    calcTotalCandies(4, 20) // expected output: 20
    calcTotalCandies(6, 25) // expected output: 24