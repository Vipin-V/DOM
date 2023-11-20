#include<stdio.h>

int main (){
  fun(5);
  return 0;
}

void fun(int count)
  {
    if (count != 0){
      printf("hello world \n");
      fun(count - 1);
    }
    else{
    printf("i'm done!!");
    }
  }