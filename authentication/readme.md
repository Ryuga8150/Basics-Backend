# BCRYPT VS BRCYPTJS
Short summary: bcrypt is a native (C++) module, thus much faster than bcryptjs which is a pure js module.

bcrypt sometimes requires additional steps to build correctly, especially if you are using architectures other than x86_64 or a glibc based distro. You will need additional dependencies to compile from source.

bcryptjs is plain js, hence works everywhere, even browsers. bcrypt runs only on NodeJS, Node-WebKit or Electron.