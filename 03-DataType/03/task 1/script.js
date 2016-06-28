		function createPoint(x, y) {
            return {
                x: x,
                y: y,
                toString: function () {
                    return '(' + this.x + ', ' + this.y + ')';
                }
            };
        }

        function createLine(pointA, pointB) {
            return {
                pointA: pointA,
                pointB: pointB,
                toString: function () {
                    return '(' + this.pointA.toString() + ', ' + this.pointB.toString() + ')';
                }
            };
        }
        
        function calculateDistance(pointA, pointB) {
            return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
        }

        function canFormTriangle(lineA, lineB, lineC) {
            if ((calculateDistance(lineA.pointA, lineA.pointB) + calculateDistance(lineB.pointA, lineB.pointB) > calculateDistance(lineC.pointA, lineC.pointB))
                || (calculateDistance(lineB.pointA, lineB.pointB) + calculateDistance(lineC.pointA, lineC.pointB) > calculateDistance(lineA.pointA, lineA.pointB))
                || (calculateDistance(lineA.pointA, lineA.pointB) + calculateDistance(lineC.pointA, lineC.pointB) > calculateDistance(lineB.pointA, lineB.pointB))) {
                return true;
            }
            return false;
        }

    	var pointA = createPoint(1, 3);
        var pointB = createPoint(2, -4);
        var pointC = createPoint(9, -7);
        console.log('A: ' + pointA.toString());
        console.log('B: ' + pointB.toString());
        console.log('C: ' + pointC.toString());
        console.log('A, B distance: ' + calculateDistance(pointA, pointB));
        var lineAB = createLine(pointA, pointB);
        var lineBC = createLine(pointB, pointC);
        var lineAC = createLine(pointA, pointC);
        console.log('lineAB: ' + lineAB.toString());
        console.log('lineBC: ' + lineBC.toString());
        console.log('lineAC: ' + lineAC.toString());
        console.log('Can form triangle: ' + canFormTriangle(lineAB, lineBC, lineAC));