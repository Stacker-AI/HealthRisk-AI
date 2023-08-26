# Use an official Python runtime as a base image
FROM python:3.11

# Set environment variables
ENV DEBUG=1
ENV SECRET_KEY='django-insecure-_p783668ogs95prhpf7^%@1%u$ujw*97v3$or@cgwcmi96&=50'
ENV DJANGO_ALLOWED_HOSTS='*'

# Set the working directory in the container
WORKDIR /

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

# Expose port 8000 to the outside world
EXPOSE 8000

# Define the command to run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]