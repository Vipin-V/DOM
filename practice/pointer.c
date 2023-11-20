#include <stdio.h>

int main(){
  int a = 233;
  int *ptr = &a;
  int b = *ptr;
  printf("%p\n", *ptr);
  printf("%u", ptr);
  return 0;
}