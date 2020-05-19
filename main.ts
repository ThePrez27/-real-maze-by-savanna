namespace SpriteKind {
    export const key = SpriteKind.create()
    export const door = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function set_key (x: number, y: number) {
    Have_key = 0
    yellow_key = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 5 5 . . . . 
. . 5 5 5 . . . . . . 5 5 5 . . . . 5 5 . 5 . . 
. . 5 5 5 . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 . . . . . . 5 5 5 . . . . . . . . . . 
. . 5 5 5 . . 5 . . . 5 5 5 . . . . . . . . . . 
. . 5 5 5 . . . . . . 5 5 5 . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.key)
    yellow_key.setPosition(x * 16 + 8, y * 16 + 8)
}
function set_level (num: number) {
    Player_1.setFlag(SpriteFlag.StayInScreen, true)
    if (num == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`100010000707070805080808080808080808050507070708050505050505050805080505080808080505050505050508050805050508050505080808050505080508080505080505050805080808080805050805080808050508080805050805050508050508080505050805050808050505050505050805080808080808080505050505050508050508050508050805050805050508080805080505080508080808050505080508080805050805080505080505050805050505050a0a0508080808050505080505080808050505050505080505050805050805080808080808080505050508080808050805050505050500090905050505050508050505050505000909`,
            img`
. . . . 2 . . . . . . . . . 2 2 
. . . . 2 2 2 2 2 2 2 . 2 . 2 2 
. . . . 2 2 2 2 2 2 2 . 2 . 2 2 
2 . 2 2 2 . . . 2 2 2 . 2 . . 2 
2 . 2 2 2 . 2 . . . . . 2 2 . 2 
. . . 2 2 . . . 2 2 . 2 2 2 . 2 
2 . . 2 2 2 . 2 2 . . 2 2 2 2 2 
2 2 . 2 . . . . . . . 2 2 2 2 2 
2 2 . 2 2 . 2 2 . 2 . 2 2 . 2 2 
2 . . . 2 . 2 2 . 2 . . . . 2 2 
2 . 2 . . . 2 2 . 2 . 2 2 . 2 2 
2 . 2 2 2 2 . . . . . . . . 2 2 
2 . 2 2 . . . 2 2 2 2 2 2 . 2 2 
2 . 2 2 . 2 . . . . . . . . 2 2 
2 . . . . 2 . 2 2 2 2 2 2 . . . 
2 2 2 2 2 2 . 2 2 2 2 2 2 . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath3,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tileDarkGrass1,sprites.castle.tilePath5,sprites.castle.tilePath4],
            TileScale.Sixteen
        ))
        tiles.placeOnRandomTile(Player_1, sprites.builtin.forestTiles0)
        controller.moveSprite(Player_1)
        scene.cameraFollowSprite(Player_1)
        set_badguy2(9, 7)
        set_badguy2(13, 13)
        set_badguy2(6, 0)
        yellow_key = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 5 5 5 5 5 . . . 5 . 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 . . . . . . . . 
. . . 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.key)
        Have_key = 0
        yellow_key.setPosition(112, 176)
        door = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e f f e . . . . 
. . . e e e e e e f f e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
`, SpriteKind.door)
        door.setPosition(216, 208)
        Open_door = 0
    }
    if (num == 2) {
        tiles.setTilemap(tiles.createTilemap(
            hex`1000100007070707070707070707070707070707080808080808080808080808080808080505050505080808080805050805080505050505050508050508050508050805050505080808080505080505080508050508080805050505050805050805080505080505050505050808050508050805050805050808080808080808080808050508050508050505080505050805050505080505080505080805050508050505050805050805050805050505080505050508080808050508080808080808080805080505080505080505050805050505050805050805050805050508050505050508080505050508080808080505050505050505090909050505050505050505`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . 2 2 . 2 . 2 
2 2 2 2 2 2 . 2 2 . 2 2 . 2 . 2 
2 2 2 . . . . 2 2 . 2 2 . 2 . 2 
2 . . . 2 2 2 2 2 . 2 2 . 2 . 2 
2 . 2 2 2 2 2 2 . . 2 2 . 2 . 2 
2 . 2 2 . . . . . . . . . . . 2 
2 . 2 2 . 2 2 2 . 2 2 2 . 2 2 2 
2 . 2 2 . 2 2 . . 2 2 2 . 2 2 2 
2 . 2 2 . 2 2 . . . 2 2 . 2 2 2 
2 . . . . 2 2 . . . . . . . . . 
2 . 2 2 . 2 2 . 2 2 2 . 2 2 2 2 
2 . 2 2 . 2 2 . 2 2 2 . 2 2 2 2 
2 . . . . . . . . . . . 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath3,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tileDarkGrass1,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath1],
            TileScale.Sixteen
        ))
        tiles.placeOnRandomTile(Player_1, sprites.builtin.forestTiles0)
        controller.moveSprite(Player_1)
        scene.cameraFollowSprite(Player_1)
        set_badguy2(12, 3)
        set_badguy2(6, 1)
        set_badguy2(2, 5)
        set_key(8, 10)
        door2(4, 14)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. . . f 4 4 f f f f . . . . . . 
. . f 4 5 5 4 5 f b f f . . . . 
. . f 5 5 5 5 4 e 3 3 b f . . . 
. . f e 4 4 4 e 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e e 3 b e 3 3 3 3 f . . 
. f 3 3 e e e f f 3 3 3 3 f . . 
. f 3 e e e f b f b b b b f . . 
. . f e 4 4 f 1 e b b b b f . . 
. . . f 4 4 4 4 f b b b b f f . 
. . . f e e e f f f b b b b f . 
. . . f d d d e 4 4 f b b f . . 
. . . f d d d e 4 4 e f f . . . 
. . f b d b d b e e b f . . . . 
. . f f 1 d 1 d 1 d f f . . . . 
. . . . f f b b f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . f 4 4 f f f f . . . . . . 
. . f 4 5 5 4 5 f b f f . . . . 
. . f 5 5 5 5 4 e 3 3 b f . . . 
. . f e 4 4 4 e 3 3 3 3 b f . . 
. f 3 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e e 3 b e 3 3 3 3 f . . 
. f 3 3 e e e f f 3 3 3 3 f . . 
. . f e e e f b f b b b b f f . 
. . . e 4 4 f 1 e b b b b b f . 
. . . f 4 4 4 4 f b b b b b f . 
. . . f d d d e 4 4 b b b f . . 
. . . f d d d e 4 4 f f f . . . 
. . f d d d b b e e b b f . . . 
. . f b d 1 d 1 d d b f . . . . 
. . . f f f b b f f f . . . . . 
`,img`
. . . f 4 4 f f f f . . . . . . 
. . f 4 5 5 4 5 f b f f . . . . 
. . f 5 5 5 5 4 e 3 3 b f . . . 
. . f e 4 4 4 e 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e e 3 b e 3 3 3 3 f . . 
. f 3 3 e e e f f 3 3 3 3 f . . 
. f 3 e e e f b f b b b b f . . 
. . f e 4 4 f 1 e b b b b f . . 
. . . f 4 4 4 4 f b b b b f f . 
. . . f e e e f f f b b b b f . 
. . . f d d d e 4 4 f b b f . . 
. . . f d d d e 4 4 e f f . . . 
. . f b d b d b e e b f . . . . 
. . f f 1 d 1 d 1 d f f . . . . 
. . . . f f b b f f . . . . . . 
`],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. . . . . . . f f . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. f e 3 3 3 3 3 3 3 3 3 3 e f . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f b 3 f f e e e e f f 3 b f . 
f f b b f b f e e f b f b b f f 
f b b b e 1 f 4 4 f 1 e b b b f 
. f b b e e 4 4 4 4 4 f b b f . 
. . f 4 4 4 e d d d b f e f . . 
. . f e 4 4 e d d d d c 4 e . . 
. . . f e e d d b d b b f e . . 
. . . f f 1 d 1 d 1 1 f f . . . 
. . . . . f f f b b f . . . . . 
`,img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`,img`
. . . . . . . f f . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. f e 3 3 3 3 3 3 3 3 3 3 e f . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f b 3 f f e e e e f f 3 b f . 
f f b b f b f e e f b f b b f f 
f b b b e 1 f 4 4 f 1 e b b b f 
. f b b f 4 4 4 4 4 e e b b f . 
. . f e f b d d d e 4 4 4 f . . 
. . e 4 c d d d d e 4 4 e f . . 
. . e f b b d b d d e e f . . . 
. . . f f 1 1 d 1 d 1 f f . . . 
. . . . . f b b f f f . . . . . 
`,img`
. . . . . . . f f . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. f e 3 3 3 3 3 3 3 3 3 3 e f . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f b 3 f f e e e e f f 3 b f . 
f f b b f b f e e f b f b b f f 
f b b b e 1 f 4 4 f 1 e b b b f 
. f b b e e 4 4 4 4 4 f b b f . 
. . f 4 4 4 e d d d b f e f . . 
. . f e 4 4 e d d d d c 4 e . . 
. . . f e e d d b d b b f e . . 
. . . f f 1 d 1 d 1 1 f f . . . 
. . . . . f f f b b f . . . . . 
`],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    Have_key = 1
    otherSprite.destroy()
})
function door2 (x: number, y: number) {
    door = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . e e e e e e e e e e e e e e e e . . . . . 
. . . e e e e e e e e e e e e e e e e e e . . . 
. . . e e e e e e e e e e e e e e e e e e . . . 
. . . e e e e e e e e e e e e e e e e e e . . . 
. . . e e e e e e e e e e e e e e e e e e . . . 
. . . e e e e e e e e e e e e e e e e e e . . . 
. . . e e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e f f f e e . . . 
. . . . e e e e e e e e e e e e f f f e e . . . 
. . . . e e e e e e e e e e e e f f f e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
. . . . e e e e e e e e e e e e e e e e e . . . 
`, SpriteKind.door)
    door.setPosition(x * 16 + 8, y * 16 + 8)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (Have_key == 1) {
        otherSprite.destroy()
    } else {
        Player_1.y += -16
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(sprite.vx * -1, sprite.vy * -1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attack = 1
    animation.runImageAnimation(
    Player_1,
    [img`
9 . . . . . f f f f 4 4 f . . 5 
. . 7 . f f b f 5 4 5 5 4 f 7 . 
. . . f b 3 3 e 4 5 5 5 5 f . . 
7 . f b 3 3 3 3 e 4 4 4 e f 5 . 
. . f 3 3 3 3 3 3 3 3 3 3 f . 9 
. 5 f 3 3 3 3 e b 3 e e 3 3 f . 
7 . f 3 3 3 3 f f e e e 3 3 f . 
. . f b b b b f b f e e e 3 f . 
. 9 f b b b b e 1 f 4 4 e f . . 
. f f b b b b f 4 4 4 4 f . . 7 
. f b b b b f f f e e e f . . . 
. . f b b f 4 4 e d d d f . 5 . 
7 . . f f e 4 4 e d d d f . . 9 
. . 7 . f b e e b d b d b f . . 
. 5 . . f f d 1 d 1 d 1 f f . . 
7 . 9 7 . . f f b b f f . 5 . 7 
`,img`
. 5 . f 4 4 f f f f . . 2 . . 5 
2 . f 4 5 5 4 5 f b f f . . a . 
. . f 5 5 5 5 4 e 3 3 b f . . 2 
. a f e 4 4 4 e 3 3 3 3 b f 5 . 
5 . f 3 3 3 3 3 3 3 3 3 3 f . a 
. f 3 3 e e 3 b e 3 3 3 3 f . . 
. f 3 3 e e e f f 3 3 3 3 f 2 . 
. f 3 e e e f b f b b b b f . 5 
. . f e 4 4 f 1 e b b b b f . a 
. 5 . f 4 4 4 4 f b b b b f f . 
a . . f e e e f f f b b b b f . 
. . 2 f d d d e 4 4 f b b f . . 
. . . f d d d e 4 4 e f f 2 . 5 
. . f b d b d b e e b f . . . . 
2 . f f 1 d 1 d 1 d f f . a . . 
. . . . f f b b f f . . 5 . . 2 
`,img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`],
    200,
    false
    )
    pause(2000)
    attack = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (attack == 1) {
        otherSprite.destroy()
    } else {
        game.over(false)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. . . . . . f f f f 4 4 f . . . 
. . . . f f b f 5 4 5 5 4 f . . 
. . . f b 3 3 e 4 5 5 5 5 f . . 
. . f b 3 3 3 3 e 4 4 4 e f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. . f 3 3 3 3 e b 3 e e 3 3 f . 
. . f 3 3 3 3 f f e e e 3 3 f . 
. . f b b b b f b f e e e 3 f . 
. . f b b b b e 1 f 4 4 e f . . 
. f f b b b b f 4 4 4 4 f . . . 
. f b b b b f f f e e e f . . . 
. . f b b f 4 4 e d d d f . . . 
. . . f f e 4 4 e d d d f . . . 
. . . . f b e e b d b d b f . . 
. . . . f f d 1 d 1 d 1 f f . . 
. . . . . . f f b b f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f 4 4 f . . . 
. . . . f f b f 5 4 5 5 4 f . . 
. . . f b 3 3 e 4 5 5 5 5 f . . 
. . f b 3 3 3 3 e 4 4 4 e f . . 
. . f 3 3 3 3 3 3 3 3 3 3 3 f . 
. . f 3 3 3 3 e b 3 e e 3 3 f . 
. . f 3 3 3 3 f f e e e 3 3 f . 
. f f b b b b f b f e e e f . . 
. f b b b b b e 1 f 4 4 e . . . 
. f b b b b b f 4 4 4 4 f . . . 
. . f b b b 4 4 e d d d f . . . 
. . . f f f 4 4 e d d d f . . . 
. . . f b b e e b b d d d f . . 
. . . . f b d d 1 d 1 d b f . . 
. . . . . f f f b b f f f . . . 
`,img`
. . . . . . f f f f 4 4 f . . . 
. . . . f f b f 5 4 5 5 4 f . . 
. . . f b 3 3 e 4 5 5 5 5 f . . 
. . f b 3 3 3 3 e 4 4 4 e f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. . f 3 3 3 3 e b 3 e e 3 3 f . 
. . f 3 3 3 3 f f e e e 3 3 f . 
. . f b b b b f b f e e e 3 f . 
. . f b b b b e 1 f 4 4 e f . . 
. f f b b b b f 4 4 4 4 f . . . 
. f b b b b f f f e e e f . . . 
. . f b b f 4 4 e d d d f . . . 
. . . f f e 4 4 e d d d f . . . 
. . . . f b e e b d b d b f . . 
. . . . f f d 1 d 1 d 1 f f . . 
. . . . . . f f b b f f . . . . 
`],
    200,
    true
    )
})
function set_badguy2 (x: number, y: number) {
    bad_guy_1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bad_guy_1.setPosition(x * 16 + 8, y * 16 + 8)
    bad_guy_1.setVelocity(10, 0)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    music.playMelody("C5 B A G F E D C ", 120)
    level += 1
    set_level(level)
})
function set_badguy (x: number, y: number) {
    bad_guy_1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bad_guy_1.setPosition(x * 16 + 8, y * 16 + 8)
    bad_guy_1.setVelocity(10, 0)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 3 3 3 3 3 3 e f . . . 
. . f b 3 3 3 3 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
. f b 3 3 3 3 3 3 3 3 3 3 b f . 
. f b b 3 3 3 3 3 3 3 3 b b f . 
. f b b b b b b b b b b b b f . 
f c b b b b b b b b b b b b c f 
f b b b b b b b b b b b b b b f 
. f c c b b b b b b b b c c f . 
. . e 4 c f f f f f f c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 3 3 3 3 3 3 e f . . . 
. . f b 3 3 3 3 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f b 3 3 3 3 3 3 3 3 3 3 b f . 
. f b b 3 3 3 3 3 3 3 3 b b f . 
. f b b b b b b b b b b b b f . 
f c b b b b b b b b b b b b f . 
f b b b b b b b b b b b b c f . 
f f b b b b b b b b b b c f . . 
. f c c c f f f f f f f e c . . 
. . . f b b d b d d e 4 4 e . . 
. . . f f 1 1 d 1 d e e f . . . 
. . . . . f b b f f f . . . . . 
`,img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 3 3 3 3 3 3 e f . . . 
. . f b 3 3 3 3 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
. f b 3 3 3 3 3 3 3 3 3 3 b f . 
. f b b 3 3 3 3 3 3 3 3 b b f . 
. f b b b b b b b b b b b b f . 
f c b b b b b b b b b b b b c f 
f b b b b b b b b b b b b b b f 
. f c c b b b b b b b b c c f . 
. . e 4 c f f f f f f c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 3 3 3 3 3 3 e f . . . 
. . f b 3 3 3 3 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f b 3 3 3 3 3 3 3 3 3 3 b f . 
. f b b 3 3 3 3 3 3 3 3 b b f . 
. f b b b b b b b b b b b b f . 
. f b b b b b b b b b b b b c f 
. f c b b b b b b b b b b b b f 
. . f c b b b b b b b b b b f f 
. . c e f f f f f f f c c c f . 
. . e 4 4 e d d b d b b f . . . 
. . . f e e d 1 d 1 1 f f . . . 
. . . . . f f f b b f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 3 3 3 3 3 3 e f . . . 
. . f b 3 3 3 3 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f b 3 3 3 3 3 3 3 3 3 3 b f . 
. f b b 3 3 3 3 3 3 3 3 b b f . 
. f b b b b b b b b b b b b f . 
f c b b b b b b b b b b b b f . 
f b b b b b b b b b b b b c f . 
f f b b b b b b b b b b c f . . 
. f c c c f f f f f f f e c . . 
. . . f b b d b d d e 4 4 e . . 
. . . f f 1 1 d 1 d e e f . . . 
. . . . . f b b f f f . . . . . 
`],
    200,
    true
    )
})
let bad_guy_1: Sprite = null
let attack = 0
let Open_door = 0
let door: Sprite = null
let yellow_key: Sprite = null
let Have_key = 0
let level = 0
let Player_1: Sprite = null
Player_1 = sprites.create(img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 3 3 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.Player)
animation.runImageAnimation(
Player_1,
[img`
. . . . . . . f f . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. f e 3 3 3 3 3 3 3 3 3 3 e f . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f b 3 f f e e e e f f 3 b f . 
f f b b f b f e e f b f b b f f 
f b b b e 1 f 4 4 f 1 e b b b f 
. f b b e e 4 4 4 4 4 f b b f . 
. . f 4 4 4 e d d d b f e f . . 
. . f e 4 4 e d d d d c 4 e . . 
. . . f e e d d b d b b f e . . 
. . . f f 1 d 1 d 1 1 f f . . . 
. . . . . f f f b b f . . . . . 
`,img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`,img`
. . . . . . . f f . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. f e 3 3 3 3 3 3 3 3 3 3 e f . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f b 3 f f e e e e f f 3 b f . 
f f b b f b f e e f b f b b f f 
f b b b e 1 f 4 4 f 1 e b b b f 
. f b b f 4 4 4 4 4 e e b b f . 
. . f e f b d d d e 4 4 4 f . . 
. . e 4 c d d d d e 4 4 e f . . 
. . e f b b d b d d e e f . . . 
. . . f f 1 1 d 1 d 1 f f . . . 
. . . . . f b b f f f . . . . . 
`,img`
. . . . . . . f f . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. f e 3 3 3 3 3 3 3 3 3 3 e f . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f b 3 f f e e e e f f 3 b f . 
f f b b f b f e e f b f b b f f 
f b b b e 1 f 4 4 f 1 e b b b f 
. f b b e e 4 4 4 4 4 f b b f . 
. . f 4 4 4 e d d d b f e f . . 
. . f e 4 4 e d d d d c 4 e . . 
. . . f e e d d b d b b f e . . 
. . . f f 1 d 1 d 1 1 f f . . . 
. . . . . f f f b b f . . . . . 
`],
200,
true
)
tiles.setTilemap(tiles.createTilemap(
            hex`0a00080001010101010101010101010204020204040204010102040a0a0a0a0a02010104020a0a0a0a0a02010102020a0a0a0a0a04010104040a0a0a0a0a02010102020a0a0a0a0a020101010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.shrub,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass1,sprites.castle.tilePath2,sprites.castle.tilePath9,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
game.showLongText("Princess Maze Hunt Press A to begin!", DialogLayout.Bottom)
level = 1
set_level(1)
