<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
  </head>
  <body>
    @include('view')

    @yield('name')

    @section('name') @endsection

    @url() @url('path')

    @route()

    @csrf

    @php @endphp

    @if('dition')

    @endif

    @if(!empty())

    @endif

    @if(condition)

    @endif


    @foreach(item in list)
        @continue
        @break
    @endforeach


    <script>
      let t = 'sdfasfsdff';

      setTimeout(() => {

      }, 1000);

    </script>


    <style>
      body {

      }

    </style>
  </style>
</body>
</html>