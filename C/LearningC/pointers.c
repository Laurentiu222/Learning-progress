#include<stdio.h>

void printAge(int *pAge){
  printf("You are %d years old\n",*pAge);
}
int main(){
  //pointer = a 'variable-like' referance that holds a momory address to another variable, array, etc.
  //          some tasks are performed more easily with pointers
  //           * = indicator operator (value at address)

  int age =21;
  //int *pAge = &age;
  // printf("address of age: %p\n", &age);
  // printf("value of pAge: %p\n", &pAge);

  // printf("size of age: %d bytes\n", sizeof(age));
  // printf("size of pAge: %d bytes\n", sizeof(pAge));

  // printf("value of age: %d\n", age);
  // printf("value at stored adress: %d\n", *pAge);
  printAge(&age);

return 0;
}