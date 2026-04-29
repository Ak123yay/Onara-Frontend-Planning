import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const nativePackages = {
  "win32-x64": "lightningcss-win32-x64-msvc",
  "win32-arm64": "lightningcss-win32-arm64-msvc",
};

const key = `${process.platform}-${process.arch}`;
const packageName = nativePackages[key];

if (packageName) {
  try {
    require.resolve(packageName);
  } catch {
    console.error(`
Missing native dependency: ${packageName}

This usually happens when node_modules was installed in WSL/Linux and then reused from Windows Node.
Run these from a Windows terminal in the onara folder:

  npm install --include=optional

If the package is still missing after that, reinstall dependencies from the same terminal you use to run Next:

  rmdir /s /q node_modules .next
  npm install --include=optional
`);
    process.exit(1);
  }
}
