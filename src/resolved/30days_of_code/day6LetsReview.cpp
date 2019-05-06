#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

string calc_str(string str) {
    string head_string;
    string tail_string;
    string result;
  
    int str_length = str.length();

    for (int i = 0; i < str_length; i++) {
      if (i == 0 || i % 2 == 0) {
          char target_char = str[i];
          head_string += target_char;
      } else {
          char target_char = str[i];
          tail_string += target_char;
      }
    }

    result = head_string +  " " + tail_string;
    return result;
}

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    int input_num;
    string input_string;

    cin >> input_num;
    cin.ignore();

    string input_str_array[input_num];
    string result_str_array[input_num];

    for (int i = 0; i < input_num; i++) {
       getline(cin, input_string);
       input_str_array[i] = input_string;
    }

    for (int i = 0; i < input_num; i++) {
      cout << calc_str(input_str_array[i]) << endl;
    }
  
    return 0;
}
