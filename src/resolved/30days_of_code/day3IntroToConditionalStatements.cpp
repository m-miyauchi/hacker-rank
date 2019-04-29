#include <bits/stdc++.h>

using namespace std;



int main()
{
    int N;
    cin >> N;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    if (N % 2 != 0) {
      cout << "Weird" << endl;
    } else if (2 <= N && N <= 5) {
      cout << "Not Weird" << endl;
    } else if (6 <= N && N <= 20) {
      cout << "Weird" << endl;
    } else if (20 < N) {
      cout << "Not Weird" << endl;
    }

    return 0;
}
