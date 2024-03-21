import os

# this will take all the css files in res/cap-frontend/src and will create a new css file
# that will contain all the contet of the css files in res/cap-frontend/src and with comment of the file name


def load_directory(directory, outfile):
    files = sorted(os.listdir(directory))
    css_files = [f for f in files if f.endswith('.css')]
    directories = [f for f in files if os.path.isdir(directory + f)]
    for name in css_files:
        with open(directory + name) as infile:
            file_full_path = directory + name
            file_full_path = file_full_path.replace('res/cap-frontend/src/', '')
            outfile.write('/* ' + file_full_path + ' */\n')
            outfile.write(infile.read())
            outfile.write('\n\n')

    for name in directories:
        load_directory(directory + name + '/', outfile)


def main():
    with open('all.css', 'w') as outfile:
        load_directory('res/cap-frontend/src/', outfile)


if __name__ == '__main__':
    main()

