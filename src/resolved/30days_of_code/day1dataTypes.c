#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int i = 4;
    double d = 4.0;
    char s[] = "HackerRank ";

    // Declare second integer, double, and String variables.
    int i2;
    double d2;
    char s2[256];
    
    // Read and save an integer, double, and String to your variables.
    scanf("%d\n", &i2);
    scanf("%lf\n", &d2);
    fgets(s2, 256, stdin);
    
    printf("%d \n", i + i2);
    printf("%.1lf \n", d + d2);
    printf("%s%s", s, s2);

    return 0;
}