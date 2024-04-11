import csv
import json

# Define the headers since the CSV doesn't have any
headers = ["Product", "Sizes", "Color", "Category", "Brand", "Details", "Price", "Discount", "Description"]

# Open the CSV file and read its content
with open('v2 - Sheet1.csv', 'r') as csv_file:
    reader = csv.reader(csv_file)
    data = list(reader)

# Create a list of dictionaries where each dictionary represents a row in the CSV file
data_dicts = [dict(zip(headers, row)) for row in data]

# Convert the list of dictionaries to JSON
data_json = json.dumps(data_dicts, indent=4)

# Write the JSON string to a new file
with open('v2 - Sheet1.json', 'w') as json_file:
    json_file.write(data_json)

print("Conversion complete!")
