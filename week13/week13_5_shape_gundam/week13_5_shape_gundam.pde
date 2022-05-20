PShape gundam;
void setup()
{
    size(500, 500, P3D);
    gundam = loadShape("Gundam.obj");
    
    
}
void draw()
{
   background(#F8FFAF);
   translate( 250, 0, 0);
   scale(20, 20, 20);
   shape(gundam);
}
