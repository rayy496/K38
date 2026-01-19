function for_case_right_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[304.015,-163.525],[304.015,-178.575]]).appendArc([300.015,-182.575],{"radius":4,"clockwise":true,"large":false}).appendPoint([281.1396439,-182.575]).appendPoint([262.6847373,-184.1895951]).appendPoint([244.9599104,-188.9389481]).appendPoint([228.0119137,-196.8419287]).appendArc([222.6962095,-194.9071706],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.6453316,-177.6420073]).appendArc([216.5800898,-172.3263031],{"radius":4,"clockwise":true,"large":false}).appendPoint([223.4869923,-169.1055616]).appendPoint([223.625,-168.5556962]).appendPoint([223.625,-136.665]).appendArc([227.625,-132.665],{"radius":4,"clockwise":true,"large":false}).appendPoint([242.675,-132.665]).appendPoint([242.675,-98.565]).appendArc([246.675,-94.565],{"radius":4,"clockwise":true,"large":false}).appendPoint([261.729515,-94.565]).appendArc([265.725,-90.755],{"radius":4,"clockwise":true,"large":false}).appendPoint([280.779515,-90.755]).appendArc([284.775,-86.945],{"radius":4,"clockwise":true,"large":false}).appendPoint([303.825,-86.945]).appendArc([307.820485,-90.755],{"radius":4,"clockwise":true,"large":false}).appendPoint([322.875,-90.755]).appendArc([326.875,-94.755],{"radius":4,"clockwise":true,"large":false}).appendPoint([326.875,-98.375]).appendPoint([341.925,-98.375]).appendArc([345.925,-102.375],{"radius":4,"clockwise":true,"large":false}).appendPoint([345.925,-159.525]).appendArc([341.925,-163.525],{"radius":4,"clockwise":true,"large":false}).appendPoint([304.015,-163.525]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[227.5427567,-189.8611593],[240.2310657,-183.9445037]]).appendPoint([234.3144101,-171.2561947]).appendPoint([221.6261011,-177.1728503]).appendPoint([227.5427567,-189.8611593]).close().innerToCAG()
.union(
    new CSG.Path2D([[283.49,-176.05],[297.49,-176.05]]).appendPoint([297.49,-162.05]).appendPoint([283.49,-162.05]).appendPoint([283.49,-176.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[249.2,-115.09],[263.2,-115.09]]).appendPoint([263.2,-101.09]).appendPoint([249.2,-101.09]).appendPoint([249.2,-115.09]).close().innerToCAG()
).union(
    new CSG.Path2D([[249.2,-134.14],[263.2,-134.14]]).appendPoint([263.2,-120.14]).appendPoint([249.2,-120.14]).appendPoint([249.2,-134.14]).close().innerToCAG()
).union(
    new CSG.Path2D([[249.2,-153.19],[263.2,-153.19]]).appendPoint([263.2,-139.19]).appendPoint([249.2,-139.19]).appendPoint([249.2,-153.19]).close().innerToCAG()
).union(
    new CSG.Path2D([[268.25,-111.28],[282.25,-111.28]]).appendPoint([282.25,-97.28]).appendPoint([268.25,-97.28]).appendPoint([268.25,-111.28]).close().innerToCAG()
).union(
    new CSG.Path2D([[268.25,-130.33],[282.25,-130.33]]).appendPoint([282.25,-116.33]).appendPoint([268.25,-116.33]).appendPoint([268.25,-130.33]).close().innerToCAG()
).union(
    new CSG.Path2D([[268.25,-149.38],[282.25,-149.38]]).appendPoint([282.25,-135.38]).appendPoint([268.25,-135.38]).appendPoint([268.25,-149.38]).close().innerToCAG()
).union(
    new CSG.Path2D([[287.3,-107.47],[301.3,-107.47]]).appendPoint([301.3,-93.47]).appendPoint([287.3,-93.47]).appendPoint([287.3,-107.47]).close().innerToCAG()
).union(
    new CSG.Path2D([[287.3,-126.52],[301.3,-126.52]]).appendPoint([301.3,-112.52]).appendPoint([287.3,-112.52]).appendPoint([287.3,-126.52]).close().innerToCAG()
).union(
    new CSG.Path2D([[287.3,-145.57],[301.3,-145.57]]).appendPoint([301.3,-131.57]).appendPoint([287.3,-131.57]).appendPoint([287.3,-145.57]).close().innerToCAG()
).union(
    new CSG.Path2D([[306.35,-111.28],[320.35,-111.28]]).appendPoint([320.35,-97.28]).appendPoint([306.35,-97.28]).appendPoint([306.35,-111.28]).close().innerToCAG()
).union(
    new CSG.Path2D([[306.35,-130.33],[320.35,-130.33]]).appendPoint([320.35,-116.33]).appendPoint([306.35,-116.33]).appendPoint([306.35,-130.33]).close().innerToCAG()
).union(
    new CSG.Path2D([[306.35,-149.38],[320.35,-149.38]]).appendPoint([320.35,-135.38]).appendPoint([306.35,-135.38]).appendPoint([306.35,-149.38]).close().innerToCAG()
).union(
    new CSG.Path2D([[325.4,-118.9],[339.4,-118.9]]).appendPoint([339.4,-104.9]).appendPoint([325.4,-104.9]).appendPoint([325.4,-118.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[325.4,-137.95],[339.4,-137.95]]).appendPoint([339.4,-123.95]).appendPoint([325.4,-123.95]).appendPoint([325.4,-137.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[325.4,-157],[339.4,-157]]).appendPoint([339.4,-143]).appendPoint([325.4,-143]).appendPoint([325.4,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[245.3720486,-182.0733389],[258.8950102,-178.4498723]]).appendPoint([255.2715436,-164.9269107]).appendPoint([241.748582,-168.5503773]).appendPoint([245.3720486,-182.0733389]).close().innerToCAG()
).union(
    new CSG.Path2D([[264.2828144,-177.4998571],[278.2295402,-176.2796767]]).appendPoint([277.0093598,-162.3329509]).appendPoint([263.062634,-163.5531313]).appendPoint([264.2828144,-177.4998571]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function case_right_case_fn() {
                    

                // creating part 0 of case case_right
                let case_right__part_0 = for_case_right_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let case_right__part_0_bounds = case_right__part_0.getBounds();
                let case_right__part_0_x = case_right__part_0_bounds[0].x + (case_right__part_0_bounds[1].x - case_right__part_0_bounds[0].x) / 2
                let case_right__part_0_y = case_right__part_0_bounds[0].y + (case_right__part_0_bounds[1].y - case_right__part_0_bounds[0].y) / 2
                case_right__part_0 = translate([-case_right__part_0_x, -case_right__part_0_y, 0], case_right__part_0);
                case_right__part_0 = rotate([0,0,0], case_right__part_0);
                case_right__part_0 = translate([case_right__part_0_x, case_right__part_0_y, 0], case_right__part_0);

                case_right__part_0 = translate([0,0,0], case_right__part_0);
                let result = case_right__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_right_case_fn();
            }

        