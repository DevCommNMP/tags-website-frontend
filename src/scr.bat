@echo off
setlocal

REM Get the current user's home directory
for /f "tokens=2 delims==;" %%a in ('wmic os get username /value') do set "USER_HOME=%%a"

REM Path to the directory containing Python scripts
set "PYTHON_SCRIPTS_DIR=%USER_HOME%\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\Scripts"

REM Check if the directory exists
if exist "%PYTHON_SCRIPTS_DIR%" (
    REM Add the directory to the PATH
    setx PATH "%PATH%;%PYTHON_SCRIPTS_DIR%"
    echo Python scripts directory added to PATH.
) else (
    echo Python scripts directory not found. Please verify the path.
)

endlocal
