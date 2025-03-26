"use client"

import { useState } from "react"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Checkbox,
  Label,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator
} from "@/lib/design-system"
import {
  Facebook,
  Linkedin,
  Instagram,
  X,
  CheckCheck,
  User,
  Heart,
  MessageCircle,
  Repeat,
  Bookmark,
  Share2,
  ThumbsUp,
  Send,
  MoreHorizontal,
  Image as ImageIcon
} from "lucide-react"

interface SocialMediaPublishDialogProps {
  isOpen: boolean
  onClose: () => void
  content: string
}

export function SocialMediaPublishDialog({
  isOpen,
  onClose,
  content
}: SocialMediaPublishDialogProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [customMessages, setCustomMessages] = useState<{[key: string]: string}>({
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: ''
  })
  const [activeTab, setActiveTab] = useState("platforms")
  const [hasImageAttached, setHasImageAttached] = useState(false)

  // Function to toggle platform selection
  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform) 
        : [...prev, platform]
    )
  }

  // Function to update custom message for a platform
  const updateMessage = (platform: string, message: string) => {
    setCustomMessages(prev => ({
      ...prev,
      [platform]: message
    }))
  }

  // Function to generate a preview of the content
  const getPreviewContent = (platform: string) => {
    return customMessages[platform] || content.substring(0, 
      platform === 'twitter' ? 280 : 
      platform === 'linkedin' ? 1300 : 
      platform === 'facebook' ? 2000 : 
      platform === 'instagram' ? 2200 : 500
    )
  }

  // Function to toggle image attachment
  const toggleImageAttachment = () => {
    setHasImageAttached(!hasImageAttached)
  }

  // Handle publish action
  const handlePublish = () => {
    // Here you would implement the actual publishing logic
    console.log("Publishing to:", selectedPlatforms)
    console.log("With messages:", customMessages)
    console.log("Has image:", hasImageAttached)
    onClose()
  }

  // Render platform-specific preview
  const renderPlatformPreview = (platform: string) => {
    const previewContent = getPreviewContent(platform)
    
    switch(platform) {
      case 'twitter':
        return (
          <div className="bg-white dark:bg-[#15202b] rounded-md p-4 space-y-3 border border-gray-200 dark:border-gray-800">
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <User className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">WordJet User</p>
                    <p className="text-xs text-gray-500">@wordjet_user</p>
                  </div>
                  <X className="h-4 w-4 text-[#1DA1F2]" />
                </div>
                <p className="text-sm my-2">{previewContent}</p>
                {hasImageAttached && (
                  <div className="rounded-lg bg-gray-100 dark:bg-gray-800 h-40 w-full flex items-center justify-center border border-gray-300 dark:border-gray-700 mb-2">
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  </div>
                )}
                <div className="flex items-center justify-between pt-2 text-gray-500 max-w-md">
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span className="text-xs">24</span>
                  </div>
                  <div className="flex items-center">
                    <Repeat className="h-4 w-4 mr-1" />
                    <span className="text-xs">12</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    <span className="text-xs">148</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'facebook':
        return (
          <div className="bg-white dark:bg-[#18191A] rounded-md space-y-3 border border-gray-200 dark:border-gray-800">
            <div className="p-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">WordJet User</p>
                    <p className="text-xs text-gray-500">Just now · <span className="rounded-full text-xs bg-gray-200 dark:bg-gray-700 px-1">Public</span></p>
                  </div>
                </div>
                <MoreHorizontal className="h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="px-4 py-2">
              <p className="text-sm">{previewContent}</p>
            </div>
            {hasImageAttached && (
              <div className="bg-gray-100 dark:bg-gray-800 w-full h-52 flex items-center justify-center">
                <ImageIcon className="h-10 w-10 text-gray-400" />
              </div>
            )}
            <div className="px-4 py-1 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-between text-xs text-gray-500">
                <span>12 Likes</span>
                <span>3 Comments</span>
              </div>
            </div>
            <div className="px-2 py-1 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-around">
                <button className="flex items-center space-x-1 text-gray-500 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-xs">Like</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs">Comment</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Share2 className="h-4 w-4" />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'linkedin':
        return (
          <div className="bg-white dark:bg-[#1D2226] rounded-md space-y-3 border border-gray-200 dark:border-gray-800">
            <div className="p-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-start space-x-2">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-sm font-semibold">WordJet User</p>
                      <p className="text-xs text-gray-500">Content Creator | WordJet Platform</p>
                      <p className="text-xs text-gray-500">Just now · <span className="rounded-full text-xs bg-gray-200 dark:bg-gray-700 px-1"><span className="sr-only">Visibility:</span> 🌎</span></p>
                    </div>
                    <MoreHorizontal className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-2">
              <p className="text-sm">{previewContent}</p>
            </div>
            {hasImageAttached && (
              <div className="bg-gray-100 dark:bg-gray-800 w-full h-52 flex items-center justify-center">
                <ImageIcon className="h-10 w-10 text-gray-400" />
              </div>
            )}
            <div className="px-4 py-1 border-t border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <ThumbsUp className="h-3 w-3 text-blue-600 bg-blue-100 rounded-full p-[1px]" />
                <span>18</span>
                <span className="mx-1">·</span>
                <span>5 comments</span>
              </div>
            </div>
            <div className="px-2 py-1">
              <div className="flex items-center justify-around">
                <button className="flex items-center space-x-1 text-gray-500 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-xs">Like</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs">Comment</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Repeat className="h-4 w-4" />
                  <span className="text-xs">Repost</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Send className="h-4 w-4" />
                  <span className="text-xs">Send</span>
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'instagram':
        return (
          <div className="bg-white dark:bg-black rounded-md space-y-3 border border-gray-200 dark:border-gray-800 max-w-[400px] mx-auto">
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                  <div className="h-full w-full rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-sm font-semibold">wordjet_user</p>
              </div>
              <MoreHorizontal className="h-5 w-5" />
            </div>
            
            {hasImageAttached ? (
              <div className="bg-gray-100 dark:bg-gray-800 aspect-square w-full flex items-center justify-center">
                <ImageIcon className="h-10 w-10 text-gray-400" />
              </div>
            ) : (
              <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900">
                <p className="text-base text-center font-medium">{previewContent}</p>
              </div>
            )}
            
            <div className="px-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6" />
                  <MessageCircle className="h-6 w-6" />
                  <Send className="h-6 w-6" />
                </div>
                <Bookmark className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold">123 likes</p>
              <div className="mt-1">
                <span className="text-sm font-semibold">wordjet_user</span>
                <span className="text-sm ml-1">{hasImageAttached ? previewContent : ""}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">View all 12 comments</p>
              <p className="text-[10px] text-gray-500 mt-1">JUST NOW</p>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="bg-background rounded-md p-4 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <User className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">WordJet User</p>
                <p className="text-xs text-muted-foreground">@wordjet_user</p>
              </div>
            </div>
            <p className="text-sm">{previewContent}</p>
            {hasImageAttached && (
              <div className="rounded-lg bg-gray-100 dark:bg-gray-800 h-40 w-full flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>
        );
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Publish Content to Social Media</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Select platforms and customize your message for each social network.
          </p>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="platforms">Select Platforms</TabsTrigger>
            <TabsTrigger 
              value="preview" 
              disabled={selectedPlatforms.length === 0}
            >
              Preview & Customize
            </TabsTrigger>
          </TabsList>

          <TabsContent value="platforms" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="twitter" 
                  checked={selectedPlatforms.includes('twitter')}
                  onCheckedChange={() => togglePlatform('twitter')}
                />
                <div className="grid gap-1.5">
                  <Label htmlFor="twitter" className="flex items-center gap-2">
                    <X className="h-4 w-4" />
                    Twitter
                  </Label>
                  <p className="text-sm text-muted-foreground">Up to 280 characters</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="facebook" 
                  checked={selectedPlatforms.includes('facebook')}
                  onCheckedChange={() => togglePlatform('facebook')}
                />
                <div className="grid gap-1.5">
                  <Label htmlFor="facebook" className="flex items-center gap-2">
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Label>
                  <p className="text-sm text-muted-foreground">Up to 2000 characters</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="linkedin" 
                  checked={selectedPlatforms.includes('linkedin')}
                  onCheckedChange={() => togglePlatform('linkedin')}
                />
                <div className="grid gap-1.5">
                  <Label htmlFor="linkedin" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Label>
                  <p className="text-sm text-muted-foreground">Up to 1300 characters</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="instagram" 
                  checked={selectedPlatforms.includes('instagram')}
                  onCheckedChange={() => togglePlatform('instagram')}
                />
                <div className="grid gap-1.5">
                  <Label htmlFor="instagram" className="flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Label>
                  <p className="text-sm text-muted-foreground">Up to 2200 characters</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => setActiveTab('preview')} 
              disabled={selectedPlatforms.length === 0}
              className="mt-4"
            >
              Continue to Preview
            </Button>
          </TabsContent>

          <TabsContent value="preview" className="space-y-4 mt-4">
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="attachment"
                checked={hasImageAttached}
                onCheckedChange={() => toggleImageAttachment()}
              />
              <Label htmlFor="attachment" className="flex items-center gap-2 cursor-pointer">
                <ImageIcon className="h-4 w-4" />
                <span>Include image attachment</span>
              </Label>
            </div>

            <Tabs defaultValue={selectedPlatforms[0]}>
              <TabsList className="w-full flex overflow-x-auto">
                {selectedPlatforms.map(platform => (
                  <TabsTrigger key={platform} value={platform} className="flex items-center gap-2">
                    {platform === 'twitter' && <X className="h-4 w-4" />}
                    {platform === 'facebook' && <Facebook className="h-4 w-4" />}
                    {platform === 'linkedin' && <Linkedin className="h-4 w-4" />}
                    {platform === 'instagram' && <Instagram className="h-4 w-4" />}
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {selectedPlatforms.map(platform => (
                <TabsContent key={platform} value={platform} className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label>Customize your message for {platform}</Label>
                      <Textarea 
                        value={customMessages[platform]}
                        onChange={(e) => updateMessage(platform, e.target.value)}
                        placeholder={content.substring(0, 100) + "..."}
                        className="mt-1"
                        maxLength={
                          platform === 'twitter' ? 280 : 
                          platform === 'linkedin' ? 1300 : 
                          platform === 'facebook' ? 2000 : 
                          platform === 'instagram' ? 2200 : 2000
                        }
                      />
                      <p className="text-xs text-right text-muted-foreground mt-1">
                        {(customMessages[platform] || "").length}/
                        {platform === 'twitter' ? 280 : 
                          platform === 'linkedin' ? 1300 : 
                          platform === 'facebook' ? 2000 : 
                          platform === 'instagram' ? 2200 : 2000
                        } characters
                      </p>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Preview</CardTitle>
                        <p className="text-sm text-muted-foreground">How your post will look on {platform}</p>
                      </CardHeader>
                      <CardContent>
                        {renderPlatformPreview(platform)}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex justify-between sm:justify-between">
          <Button 
            variant="outline" 
            onClick={onClose}
          >
            Cancel
          </Button>
          <div className="flex gap-2">
            {activeTab === 'preview' && (
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('platforms')}
              >
                Back
              </Button>
            )}
            <Button 
              onClick={handlePublish}
              disabled={selectedPlatforms.length === 0}
            >
              <CheckCheck className="mr-2 h-4 w-4" />
              Publish to {selectedPlatforms.length} platform{selectedPlatforms.length !== 1 ? 's' : ''}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 