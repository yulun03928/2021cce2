void setup()
{
   size(300,300); 
}
int x=150, y=150;
void draw()
{
   background(#FFFFF2);
   ellipse(x, y, 30, 30); 
}
void keyPressed()
{
   if( key =='w' ) y-=5;
   if( key =='s' ) y+=5;
   if( key =='a' ) x-=5;
   if( key =='d' ) x+=5;
}
