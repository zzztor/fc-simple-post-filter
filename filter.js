// Mueve los posts a top y les pone fondo verde 
var keywordsToBoost = ['+hd','+prv'];
// Hace transparente los posts
var keywordsToNerf = ['+18'];
// Borra los posts
var keywordsToRemove = ['tocho','tochaco'];


var $container = document.querySelector('#threadbits_forum_2');
var $list = $container.querySelectorAll('[id*="td_threadtitle_"]');

var postsToBoost = filterPostsByKeywords(keywordsToBoost);
var postsToNerf = filterPostsByKeywords(keywordsToNerf);
var postsToRemove = filterPostsByKeywords(keywordsToRemove);

transformPosts(postsToBoost,'boost');
transformPosts(postsToNerf,'nerf');
transformPosts(postsToRemove,'remove');

function filterPostsByKeywords(keywords){
    var postsArr = Array.prototype.slice.call($list);
    postsArr = postsArr.filter(function (e) {
        var post = e.innerText.toLowerCase();
        for (var k in keywords) {
            var keyword = keywords[k];
            if (post.indexOf(keyword) >= 0){
                return true;
            }
        }
    });
    return postsArr;
}

function transformPosts(posts,state){
    for (var i in posts){
        var $el = posts[i];
        var $selected = $container.querySelectorAll('tr')[i];

        switch (state){
            case 'boost':
                $el.style.backgroundColor = "#38ffa8";
                $container.insertBefore($el.parentElement,$container.childNodes[0]);
                break;
            case 'nerf':
                $el.style.opacity = 0.3;
                break;
            case 'remove':
                $el.parentElement.remove();
                break;
            default:
                break;
        }
    }
}

// Debug
function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}