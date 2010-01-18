require File.join(File.dirname(__FILE__), 'spec_helper')


describe 'resource' do

  it 'should get all resources' do
    res = Curl::Easy.perform(base_url + '/projects')
    res.body_str.should eql("Projects")
    res.header_str.should include('200')
  end

  it 'should create a resource' do
    res = Curl::Easy.http_post(base_url + '/projects')
    res.body_str.should eql("POST Projects")
    res.header_str.should include('200')
  end

end

describe "resource members" do

  it 'should get a resource' do
    res = Curl::Easy.perform(base_url + '/projects/123')
    res.body_str.should eql("GET Project No. 123")
    res.header_str.should include('200')
  end

  it 'should update a resource' do
    res = Curl::Easy.http_post(base_url + '/projects/456', '_method=put')
    res.body_str.should eql("PUT Project No. 456")
    res.header_str.should include('200')
  end

  it 'should delete a resource' do
    res = Curl::Easy.http_post(base_url + '/projects/789', '_method=delete')
    res.body_str.should eql("DELETE Project No. 789")
    res.header_str.should include('200')
  end

end

describe "nested resources" do

  it 'should get all nested resources' do
    res = Curl::Easy.perform(base_url + '/projects/123/documents')
    res.body_str.should eql("GET Project No. 123 documents")
    res.header_str.should include('200')
  end

  it 'should create a  nested resource' do
    res = Curl::Easy.http_post(base_url + '/projects/123/documents')
    res.body_str.should eql("POST Project No. 123 documents")
    res.header_str.should include('200')
  end

  it 'should get a specific nested resource' do
    res = Curl::Easy.perform(base_url + '/projects/123/documents/456')
    res.body_str.should eql("GET Project No. 123, Document No. 456")
    res.header_str.should include('200')
  end

  it 'should update a resource' do
    res = Curl::Easy.http_post(base_url + '/projects/456/documents/123', '_method=put')
    res.body_str.should eql("PUT Project No. 456, Document No. 123")
    res.header_str.should include('200')
  end

  it 'should delete a resource' do
    res = Curl::Easy.http_post(base_url + '/projects/789/documents/456', '_method=delete')
    res.body_str.should eql("DELETE Project No. 789, Document No. 456")
    res.header_str.should include('200')
  end

end
