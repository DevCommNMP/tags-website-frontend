# Get the current user's home directory
USER_HOME=$(eval echo "~$(whoami)")

# Path to the directory containing Python scripts
PYTHON_SCRIPTS_DIR="$USER_HOME\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\Scripts"

# Check if the directory exists
if [ -d "$PYTHON_SCRIPTS_DIR" ]; then
    # Add the directory to the PATH
    export PATH="$PATH:$PYTHON_SCRIPTS_DIR"
    echo "Python scripts directory added to PATH."
else
    echo "Python scripts directory not found. Please verify the path."
fi
