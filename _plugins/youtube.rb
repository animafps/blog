class YouTube < Liquid::Tag
    Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/
  
    def initialize(tagName, markup, tokens)
      super
  
      if markup =~ Syntax then
        @id = $1
      else
        raise "No YouTube ID provided in the \"youtube\" tag"
      end
    end
  
    def render(context)
      # "<iframe width=\"#{@width}\" height=\"#{@height}\" src=\"http://www.youtube.com/embed/#{@id}\" frameborder=\"0\"allowfullscreen></iframe>"
      "<div class='embed-responsive'><lite-youtube videoid='#{@id}' params='modestbranding=1&rel=0' nocookie autoload></lite-youtube></div>"
    end
  
    Liquid::Template.register_tag "youtube", self
  end