#include <stdio.h>
void main()
{
int a[20 ],n,i,j,temp;
printf("enter no of elements in the array   ------");
scanf("%d",&n);
for (i=0;i<n;i++)
{
scanf("%d 	\n\n",&a[i]);
}

for(i=0;i<n;i++)
{
   	for(j=0;j<n-1-i;j++)
   	{
   	  if ( a[j]>a[j+1])
   	  {
   	temp=a[j];
   	a[j]=a[j+1];
   	a[j+1] = 	temp;
   	  }
      }
  }
  
  printf("sorted array");
  for (i=0;i<n;i++)
{
printf("%d \t",a[i]);
}

int beg,end,mid=(beg+end)/2,item;
beg=0;
end=n-1;
printf("enter item");
scanf("  %d  ",&item);
while(beg<end && Ga[mid]!=item)
{
if(item<a[mid])
{
end=mid;
}
else
{
beg=mid;
}
}

if( a[mid]==item)
{
printf("item found");
}

}








