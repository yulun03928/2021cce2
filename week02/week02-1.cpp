#include <stdio.h>
#include <string.h>
char line[1000];
int main ()
{
	while(scanf("%s", line)==1)
	{
		printf("%s -- is .... palindrome.\n", line );
	}
}
