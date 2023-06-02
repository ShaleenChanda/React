#include <bits/stdc++.h>
using namespace std;



void bubblesort(int arr[],int n)
{   
    int temp=0;
    for(int i=n-1;i>=0;i--)
    {
        for(int j=0;j<i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=arr[j];
            }
        }
    }
    for(int i=0;i<n;i++)
    {
        cout << arr[i] << endl;
    }
}


void insertion(int A[], int n){

    for(int i = 1; i < n; i++){
        int temp = A[i];
        int j = i-1;


        while(temp < A[j] && j >= 0){
            A[j+1] = A[j];
            j--;
        }

        A[j+1] = temp;


    }


}


int main()
{

    int A[] = {1, 2, 5, 3, 6};

    int N = 5;

    insertion(A, N);


    for(int i = 0; i < N; i++){
        cout << A[i] << " " ;
    }


    return 0;
}