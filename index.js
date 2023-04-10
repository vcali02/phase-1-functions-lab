// Code your solution in this file!
        function distanceFromHqInBlocks(block) {
            return Math.abs(block - 42);
        }

        //Math.abs gives the absolute number

        function distanceFromHqInFeet(block) {
            return distanceFromHqInBlocks(block) * 264;
        }
        //both parenthesis need to be the same because it is scope to this function. AKA it will call that number, and apply that number into the callback function.

       

       /* function distanceFromHqInFeet(start, destination) {
            return Math.abs(distanceFromHqInFeet) - distanceFromHqInFeet(start);
        } 
        */

        function distanceTravelledInFeet(start, destination) {
            return Math.abs(start - destination) * 264;
        }

        function calculatesFarePrice(start, destination) {
            const total = distanceTravelledInFeet(start, destination);
            if ( total <= 400) {
                return 0 ;
            } else if ( total > 400 && total < 2000) {
                return (total - 400) * 0.02;
            } else if ( total > 2000 && total <= 2500) {
                return 25;
            } else if (total > 2500) {
                return "cannot travel that far";
            }
        }