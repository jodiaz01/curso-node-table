import os
import sys
from ctypes import *

lib = cdll.LoadLibrary('helpers/WCL005.dll')

print(lib._func_restype_:__module__) 
