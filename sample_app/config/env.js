require('picard')
require('../../picard-resources')

picard.env = {
 root: __filename.replace(/\/config\/env.js$/, ''),
 mode: 'development',
 port: 9900,
 public_dir: '/public',
 views: '/views'
}

picard.start()
