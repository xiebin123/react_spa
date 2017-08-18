var webpack=require('webpack');
var path=require('path');

module.exports={
    context:__dirname,
    entry:{
        main:'./app/main.js'
    },
    output:{
       path:path.resolve(__dirname,'build'),
       filename:'main.js'
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname,'node_modules'),
                loader:'babel-loader',
                query:{
                    presets:['react','es2015'],
                    "plugins":[
                        ["import",{"libraryName":"antd","style":"css"}]
                    ]
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif|svg)$/i,
                loader:'url-loader',
                query:{
                    'limit':2000,
                    'name':'assets/[name]-[hash:5].[ext]'
                }
            }
        ]
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:function(){
                    return [require('precss'),require('autoprefixer')];
                }
            }
        })
    ]
}