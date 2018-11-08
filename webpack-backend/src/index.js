console.log('Everything is wroking :D \n')

if (process.env.NODE_ENV !== 'production') {
  // Only run on development environment
  console.log('mode: development \n ---------------------')
} else {
  console.log('mode: production  \n ---------------------')
}

// Start writing your code here :>
