// source:  http://dmccooey.com/polyhedra/Dodecahedron.html
// generated by  http://kitwallace.co.uk/3d/solid.xq
Name = "Dodecahedron";
C0 = 0.809016994374947424102293417183;
C1 = 1.30901699437494742410229341718;
points = [
[ 0.0,  0.5,   C1],
[ 0.0,  0.5,  -C1],
[ 0.0, -0.5,   C1],
[ 0.0, -0.5,  -C1],
[  C1,  0.0,  0.5],
[  C1,  0.0, -0.5],
[ -C1,  0.0,  0.5],
[ -C1,  0.0, -0.5],
[ 0.5,   C1,  0.0],
[ 0.5,  -C1,  0.0],
[-0.5,   C1,  0.0],
[-0.5,  -C1,  0.0],
[  C0,   C0,   C0],
[  C0,   C0,  -C0],
[  C0,  -C0,   C0],
[  C0,  -C0,  -C0],
[ -C0,   C0,   C0],
[ -C0,   C0,  -C0],
[ -C0,  -C0,   C0],
[ -C0,  -C0,  -C0]];
faces = [
[ 12 ,  4, 14,  2,  0],
[ 16 , 10,  8, 12,  0],
[  2 , 18,  6, 16,  0],
[ 17 , 10, 16,  6,  7],
[ 19 ,  3,  1, 17,  7],
[  6 , 18, 11, 19,  7],
[ 15 ,  3, 19, 11,  9],
[ 14 ,  4,  5, 15,  9],
[ 11 , 18,  2, 14,  9],
[  8 , 10, 17,  1, 13],
[  5 ,  4, 12,  8, 13],
[  1 ,  3, 15,  5, 13]];
edges = [
[4,12],
[4,14],
[2,14],
[0,2],
[0,12],
[10,16],
[8,10],
[8,12],
[0,16],
[2,18],
[6,18],
[6,16],
[10,17],
[6,7],
[7,17],
[3,19],
[1,3],
[1,17],
[7,19],
[11,18],
[11,19],
[3,15],
[9,11],
[9,15],
[4,5],
[5,15],
[9,14],
[1,13],
[8,13],
[5,13]];
// --------------------------------- 

module locate(p1, p2) {
   assign(p = p2 - p1)
   assign(distance = norm(p)) {   
      translate(p1)
//rotation of XoY plane by the Z axis with the angle of the [p1 p2] line projection with the X axis on the XoY plane
      rotate([0, 0, atan2(p[1], p[0])]) //rotation
//rotation of ZoX plane by the y axis with the angle given by the z coordinate and the sqrt(x^2 + y^2)) point in the XoY plan
      rotate([0, atan2(sqrt(pow(p[0], 2)+pow(p[1], 2)),p[2]), 0])
      children();
  }
}

function m_translate(v) = [ [1, 0, 0, 0],
                            [0, 1, 0, 0],
                            [0, 0, 1, 0],
                            [v.x, v.y, v.z, 1  ] ];
                            
function m_rotate(v) =  [ [1,  0,         0,        0],
                          [0,  cos(v.x),  sin(v.x), 0],
                          [0, -sin(v.x),  cos(v.x), 0],
                          [0,  0,         0,        1] ]
                      * [ [ cos(v.y), 0,  -sin(v.y), 0],
                          [0,         1,  0,        0],
                          [ sin(v.y), 0,  cos(v.y), 0],
                          [0,         0,  0,        1] ]
                      * [ [ cos(v.z),  sin(v.z), 0, 0],
                          [-sin(v.z),  cos(v.z), 0, 0],
                          [ 0,         0,        1, 0],
                          [ 0,         0,        0, 1] ];
                            
function vec3(v) = [v.x, v.y, v.z];
function transform(v, m)  = vec3([v.x, v.y, v.z, 1] * m);
                            
function orientate(p0, p) = 
                       m_rotate([0, atan2(sqrt(pow(p[0], 2) + pow(p[1], 2)), p[2]), 0]) 
                     * m_rotate([0, 0, atan2(p[1], p[0])]) 
                     * m_translate(p0 + p);

function orientate_r(p0, p) = 
                      m_translate(-(p0 + p))
                      * m_rotate([0, 0, -atan2(p[1], p[0])]) 
                      * m_rotate([0, -atan2(sqrt(pow(p[0], 2) + pow(p[1], 2)), p[2]), 0]); 

function transform_points(list, matrix, i = 0) = 
    i < len(list) 
       ? concat([ transform(list[i], matrix) ], transform_points(list, matrix, i + 1))
       : [];

function as_points(ids,points,i=0) =
     i < len(ids) 
        ?  concat([points[ids[i]]], as_points(ids,points,i+1))
        : [];

function normal_r(face) =
     cross(face[1]-face[0],face[2]-face[0]);

function normal(face) =
     - normal_r(face) / norm(normal_r(face));

function centre(points) = 
      vsum(points) / len(points);

function vsum(points,i=0) =
      i < len(points)
        ?  (points[i] + vsum(points,i+1))
        :  [0,0,0];


function vsub(points,v,i=0) =
      i < len(points)
        ?  concat([points[i] - v], vsub(points,v,i+1))
        :  [];

function project(pts,i=0) =
     i < len(pts)
        ? concat([[pts[i][0],pts[i][1]]], project(pts,i+1))
        : [];


module face_prism (face,face_scale,prism_scale,h) {
    assign (n = normal(face), c= centre(face))
    assign (m = orientate_r(c,n))
    assign (tpts =  face_scale * transform_points(face,m))
    assign (xy = project(tpts))
      linear_extrude(height=h,scale=prism_scale) 
          polygon(points=xy);
}

module face_prisms_in(faces,points,face_scale,prism_scale,h) {
    for (i=[0:len(faces) - 1]) 
       assign (f = as_points(faces[i],points)) 
       assign (n = normal(f), c = centre(f))
       locate(c,c+n) 
          translate([0,0,eps]) 
               mirror() rotate([0,180,0]) 
                   face_prism(f,face_scale,prism_scale,h);
}

module face_prisms_out(faces,points,face_scale,prism_scale,h) {
    for (i=[0:len(faces) - 1]) 
       assign (f = as_points(faces[i],points)) 
       assign (n = normal(f), c = centre(f))
       locate(c,c+n) 
          face_prism(f,face_scale,prism_scale,h);
}

eps=0.01;
scale=20;
shell_ratio=0.1;
prism_ratio =0.8;
prism_height=10;
prism_scale=0.5;
spoints = scale * points;

difference() {
    polyhedron(spoints,faces);
    scale(1-shell_ratio) polyhedron(spoints,faces);
    face_prisms_in(faces,spoints,prism_ratio,prism_scale,prism_height);
}
