FROM mhart/alpine-node:4
ADD package.json ./
RUN npm i
ADD *.js ./
ADD ./test ./test

RUN npm test

CMD ["npm", "start", "--", "http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt"]

