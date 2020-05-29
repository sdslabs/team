echo "Hello..."
if ! command -v rvm > /dev/null;
then
	echo "rvm not found...! Install rvm? (y/N) \c";
	read $REPLY
	if "$REPLY" = "y";
	then
		gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB;
		\curl -sSL https://get.rvm.io | bash -s stable --ruby;
		if ! command -v rvm > /dev/null;
		then
			echo "error while installing rvm. Please try again..."
			exit 1
		else
			echo "rvm successfully installed."
		fi
	else
		echo "exiting..."
		exit 1
	fi
else
	echo "rvm already installed..."
	rvm install "ruby-2.3.8"
	if [ $? -eq 0 ];
	then
		echo "successfully installed ruby-2.3.8..."
	else
		echo "ruby-2.3.8 installation failed. Please try again later..."
		exit 1
	fi
	if `gem list bundler -i`;
	then
		echo "bundle already installed..."
		echo "running "bundle install"..."
	else
		gem install bundler
		if [ $? -eq 0 ];
		then
			echo "bundler successfully installed"
			echo "running "bundle install"..."
		else
			echo "bundler installed failed. Please try again..."
			exit 1
		fi
	fi
	bundle install
	if [ $? -eq 0 ];
	then
		echo "command "bundle install" successful..."
		echo "running "npm install"..."
	else
		echo "command "bundle install" failed. Please try again..."
		exit 1
	fi
	npm install
	if [ $? -eq 0 ];
	then
		echo "command "npm install" successful..."
		echo "running "bower install"..."
	else
		echo "command "npm install" failed. Please try again..."
		exit 1
	fi
	bower install
	if [ $? -eq 0 ];
	then
		echo "command "bower install" successful..."
		echo "running "grunt build"..."
	else
		echo "command "bower install" failed. Please try again..."
		exit 1
	fi
	grunt build
	if [ $? -eq 0 ];
	then
		echo "command "grunt build" successful..."
	else
		echo "command "grunt build" failed. Please try again..."
		exit 1
	fi
fi

echo "Setup success."
